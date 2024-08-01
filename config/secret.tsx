const secrets = {
  email_user: process.env.EMAIL_USER,

  PORT: process.env.PORT || 5000,
  MONGO_URL: process.env.MONGO_URL || "mongodb://localhost:27017",

  jwt_secret: process.env.JWT_SECRET as string,
};

export default secrets;
