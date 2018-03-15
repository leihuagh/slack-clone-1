import formatErrors from '../formatErrors';
import requiresAuth from '../permissions';

export default {
  Mutation: {
    createChannel: requiresAuth.createResolver(async (parent, args, { models, user }) => {
      try {
        const team = await models.Team.findOne({ where: { id: args.teamId } }, { raw: true });
        const channel = await models.Channel.create(args);

        if (team.owner !== user.id) {
          return {
            ok: false,
            errors: [
              {
                path: 'name',
                message: 'You have to be the owner of the team to create channels',
              },
            ],
          };
        }

        return {
          ok: true,
          channel,
        };
      } catch (err) {
        console.log(err);
        return {
          return: false,
          errors: formatErrors(err, models),
        };
      }
    }),
  },
};
