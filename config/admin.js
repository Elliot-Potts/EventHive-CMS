module.exports = ({ env }) => ({
  auth: {
    secret: "Hhr3CzG4s8SHR8XjQHfb8g==",
  },
  apiToken: {
    salt: "Hhr3CzG4s8SHR8XjQHfb8g==",
  },
  transfer: {
    token: {
      salt: "Hhr3CzG4s8SHR8XjQHfb8g==",
    },
  },
  flags: {
    nps: env.bool("FLAG_NPS", true),
    promoteEE: env.bool("FLAG_PROMOTE_EE", true),
  },
});
