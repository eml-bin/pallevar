const dev = {
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_qexhFjPO4",
    APP_CLIENT_ID: "6hskl73acvb818ujdqu21s39d9",
    IDENTITY_POOL_ID: "us-east-1:0bdbbfd4-b7c2-40f2-aedb-cbdab87456eb"
  },
  s3: {
    REGION: "us-east-1",
    BUCKET: "vrparallevar-uploads"
  },
};

const prod = {
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_qexhFjPO4",
    APP_CLIENT_ID: "6hskl73acvb818ujdqu21s39d9",
    IDENTITY_POOL_ID: "us-east-1:0bdbbfd4-b7c2-40f2-aedb-cbdab87456eb"
  },
  s3: {
    REGION: "us-east-1",
    BUCKET: "vrparallevar-uploads"
  },
};
  
// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};