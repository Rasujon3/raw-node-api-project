// module scaffolding
const environments = {};

// configuration
environments.staging = {
    port: 3000,
    envName: 'staging',
};

environments.production = {
    port: 5000,
    envName: 'production',
};

// determine whhich environment was passed
const currentEnvironment =
    typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';

// export cottesponding environment obj
const environmentToExport =
    typeof (environments[currentEnvironment]) === 'object'
        ? environments[currentEnvironment]
        : environments.staging;

// export module
module.exports = environmentToExport;