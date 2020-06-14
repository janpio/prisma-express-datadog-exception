
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  debugLib,
  sqltag
} = require('./runtime')

const path = require('path')
const debug = debugLib('prisma-client')

debug("Client Version 2.0.0")
debug("Engine Version de2bc1cbdb5561ad73d2f08463fa2eec48993f56")

/**
 * Prisma Client JS version: 2.0.0
 * Query Engine version: de2bc1cbdb5561ad73d2f08463fa2eec48993f56
 */
exports.prismaVersion = {
  client: "2.0.0",
  engine: "de2bc1cbdb5561ad73d2f08463fa2eec48993f56"
}

exports.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = PrismaClientRustPanicError;
exports.PrismaClientInitializationError = PrismaClientInitializationError;
exports.PrismaClientValidationError = PrismaClientValidationError;

/**
 * Re-export of sql-template-tag
 */

exports.sql = sqltag.sqltag
exports.empty = sqltag.empty
exports.join = sqltag.join
exports.raw = sqltag.raw


/**
 * Build tool annotations
 * In order to make `ncc` and `node-file-trace` happy.
**/

path.join(__dirname, 'query-engine-windows');

/**
 * Annotation for Vercel
**/
path.join(__dirname, 'schema.prisma');

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.OrderByArg = makeEnum({
  asc: 'asc',
  desc: 'desc'
});


/**
 * DMMF
 */
const dmmfString = "{\"datamodel\":{\"enums\":[],\"models\":[{\"name\":\"Customer\",\"isEmbedded\":false,\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"type\":\"Int\",\"hasDefaultValue\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"type\":\"String\",\"hasDefaultValue\":false,\"isGenerated\":false,\"isUpdatedAt\":false}],\"isGenerated\":false,\"idFields\":[],\"uniqueFields\":[],\"uniqueIndexes\":[]}]},\"mappings\":[{\"model\":\"Customer\",\"plural\":\"customers\",\"findOne\":\"findOneCustomer\",\"findMany\":\"findManyCustomer\",\"create\":\"createOneCustomer\",\"delete\":\"deleteOneCustomer\",\"update\":\"updateOneCustomer\",\"deleteMany\":\"deleteManyCustomer\",\"updateMany\":\"updateManyCustomer\",\"upsert\":\"upsertOneCustomer\",\"aggregate\":\"aggregateCustomer\"}],\"schema\":{\"enums\":[{\"name\":\"OrderByArg\",\"values\":[\"asc\",\"desc\"]}],\"outputTypes\":[{\"name\":\"Customer\",\"fields\":[{\"name\":\"id\",\"args\":[],\"outputType\":{\"type\":\"Int\",\"kind\":\"scalar\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}},{\"name\":\"name\",\"args\":[],\"outputType\":{\"type\":\"String\",\"kind\":\"scalar\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}}]},{\"name\":\"AggregateCustomer\",\"fields\":[{\"name\":\"count\",\"args\":[{\"name\":\"where\",\"inputType\":[{\"type\":\"CustomerWhereInput\",\"kind\":\"object\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]},{\"name\":\"orderBy\",\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"type\":\"CustomerOrderByInput\",\"kind\":\"object\"}]},{\"name\":\"cursor\",\"inputType\":[{\"type\":\"CustomerWhereUniqueInput\",\"kind\":\"object\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]},{\"name\":\"take\",\"inputType\":[{\"type\":\"Int\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]},{\"name\":\"skip\",\"inputType\":[{\"type\":\"Int\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]}],\"outputType\":{\"type\":\"Int\",\"kind\":\"scalar\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}}]},{\"name\":\"Query\",\"fields\":[{\"name\":\"findManyCustomer\",\"args\":[{\"name\":\"where\",\"inputType\":[{\"type\":\"CustomerWhereInput\",\"kind\":\"object\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]},{\"name\":\"orderBy\",\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"type\":\"CustomerOrderByInput\",\"kind\":\"object\"}]},{\"name\":\"cursor\",\"inputType\":[{\"type\":\"CustomerWhereUniqueInput\",\"kind\":\"object\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]},{\"name\":\"take\",\"inputType\":[{\"type\":\"Int\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]},{\"name\":\"skip\",\"inputType\":[{\"type\":\"Int\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]}],\"outputType\":{\"type\":\"Customer\",\"kind\":\"object\",\"isRequired\":true,\"isList\":true,\"isNullable\":false}},{\"name\":\"aggregateCustomer\",\"args\":[],\"outputType\":{\"type\":\"AggregateCustomer\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}},{\"name\":\"findOneCustomer\",\"args\":[{\"name\":\"where\",\"inputType\":[{\"type\":\"CustomerWhereUniqueInput\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}]}],\"outputType\":{\"type\":\"Customer\",\"kind\":\"object\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}}]},{\"name\":\"BatchPayload\",\"fields\":[{\"name\":\"count\",\"args\":[],\"outputType\":{\"type\":\"Int\",\"kind\":\"scalar\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}}]},{\"name\":\"Mutation\",\"fields\":[{\"name\":\"createOneCustomer\",\"args\":[{\"name\":\"data\",\"inputType\":[{\"type\":\"CustomerCreateInput\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}]}],\"outputType\":{\"type\":\"Customer\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}},{\"name\":\"deleteOneCustomer\",\"args\":[{\"name\":\"where\",\"inputType\":[{\"type\":\"CustomerWhereUniqueInput\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}]}],\"outputType\":{\"type\":\"Customer\",\"kind\":\"object\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}},{\"name\":\"updateOneCustomer\",\"args\":[{\"name\":\"data\",\"inputType\":[{\"type\":\"CustomerUpdateInput\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}]},{\"name\":\"where\",\"inputType\":[{\"type\":\"CustomerWhereUniqueInput\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}]}],\"outputType\":{\"type\":\"Customer\",\"kind\":\"object\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}},{\"name\":\"upsertOneCustomer\",\"args\":[{\"name\":\"where\",\"inputType\":[{\"type\":\"CustomerWhereUniqueInput\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}]},{\"name\":\"create\",\"inputType\":[{\"type\":\"CustomerCreateInput\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}]},{\"name\":\"update\",\"inputType\":[{\"type\":\"CustomerUpdateInput\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}]}],\"outputType\":{\"type\":\"Customer\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}},{\"name\":\"updateManyCustomer\",\"args\":[{\"name\":\"data\",\"inputType\":[{\"type\":\"CustomerUpdateManyMutationInput\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}]},{\"name\":\"where\",\"inputType\":[{\"type\":\"CustomerWhereInput\",\"kind\":\"object\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]}],\"outputType\":{\"type\":\"BatchPayload\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}},{\"name\":\"deleteManyCustomer\",\"args\":[{\"name\":\"where\",\"inputType\":[{\"type\":\"CustomerWhereInput\",\"kind\":\"object\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]}],\"outputType\":{\"type\":\"BatchPayload\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}},{\"name\":\"executeRaw\",\"args\":[{\"name\":\"query\",\"inputType\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}]},{\"name\":\"parameters\",\"inputType\":[{\"type\":\"Json\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]}],\"outputType\":{\"type\":\"Json\",\"kind\":\"scalar\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}},{\"name\":\"queryRaw\",\"args\":[{\"name\":\"query\",\"inputType\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}]},{\"name\":\"parameters\",\"inputType\":[{\"type\":\"Json\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]}],\"outputType\":{\"type\":\"Json\",\"kind\":\"scalar\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}}]}],\"inputTypes\":[{\"name\":\"CustomerWhereInput\",\"fields\":[{\"name\":\"id\",\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"Int\"},{\"type\":\"IntFilter\",\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"object\"}],\"isRelationFilter\":false},{\"name\":\"name\",\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"String\"},{\"type\":\"StringFilter\",\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"object\"}],\"isRelationFilter\":false},{\"name\":\"AND\",\"inputType\":[{\"type\":\"CustomerWhereInput\",\"kind\":\"object\",\"isRequired\":false,\"isList\":true,\"isNullable\":false}],\"isRelationFilter\":true},{\"name\":\"OR\",\"inputType\":[{\"type\":\"CustomerWhereInput\",\"kind\":\"object\",\"isRequired\":false,\"isList\":true,\"isNullable\":false}],\"isRelationFilter\":true},{\"name\":\"NOT\",\"inputType\":[{\"type\":\"CustomerWhereInput\",\"kind\":\"object\",\"isRequired\":false,\"isList\":true,\"isNullable\":false}],\"isRelationFilter\":true}],\"isWhereType\":true,\"atLeastOne\":false},{\"name\":\"CustomerWhereUniqueInput\",\"fields\":[{\"name\":\"id\",\"inputType\":[{\"type\":\"Int\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]}],\"atLeastOne\":true},{\"name\":\"CustomerCreateInput\",\"fields\":[{\"name\":\"id\",\"inputType\":[{\"type\":\"Int\",\"kind\":\"scalar\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}]},{\"name\":\"name\",\"inputType\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}]}]},{\"name\":\"CustomerUpdateInput\",\"fields\":[{\"name\":\"id\",\"inputType\":[{\"type\":\"Int\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]},{\"name\":\"name\",\"inputType\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]}]},{\"name\":\"CustomerUpdateManyMutationInput\",\"fields\":[{\"name\":\"id\",\"inputType\":[{\"type\":\"Int\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]},{\"name\":\"name\",\"inputType\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]}]},{\"name\":\"IntFilter\",\"fields\":[{\"name\":\"equals\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"Int\"}]},{\"name\":\"not\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"Int\"},{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"IntFilter\"}]},{\"name\":\"in\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":true,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"Int\"}]},{\"name\":\"notIn\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":true,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"Int\"}]},{\"name\":\"lt\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"Int\"}]},{\"name\":\"lte\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"Int\"}]},{\"name\":\"gt\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"Int\"}]},{\"name\":\"gte\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"Int\"}]}],\"atLeastOne\":false},{\"name\":\"StringFilter\",\"fields\":[{\"name\":\"equals\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"String\"}]},{\"name\":\"not\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"String\"},{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"StringFilter\"}]},{\"name\":\"in\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":true,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"String\"}]},{\"name\":\"notIn\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":true,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"String\"}]},{\"name\":\"lt\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"String\"}]},{\"name\":\"lte\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"String\"}]},{\"name\":\"gt\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"String\"}]},{\"name\":\"gte\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"String\"}]},{\"name\":\"contains\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"String\"}]},{\"name\":\"startsWith\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"String\"}]},{\"name\":\"endsWith\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"String\"}]}],\"atLeastOne\":false},{\"name\":\"CustomerOrderByInput\",\"atLeastOne\":true,\"atMostOne\":true,\"isOrderType\":true,\"fields\":[{\"name\":\"id\",\"inputType\":[{\"type\":\"OrderByArg\",\"isList\":false,\"isRequired\":false,\"isNullable\":true,\"kind\":\"enum\"}],\"isRelationFilter\":false},{\"name\":\"name\",\"inputType\":[{\"type\":\"OrderByArg\",\"isList\":false,\"isRequired\":false,\"isNullable\":true,\"kind\":\"enum\"}],\"isRelationFilter\":false}]}]}}"

// We are parsing 2 times, as we want independent objects, because
// DMMFClass introduces circular references in the dmmf object
const dmmf = JSON.parse(dmmfString)
exports.dmmf = JSON.parse(dmmfString)

/**
 * Create the Client
 */

const config = {
  "generator": {
    "name": "client",
    "provider": "prisma-client-js",
    "output": "C:\\Users\\Jan\\Documents\\prisma-express-datadog-exception\\prisma\\generated-client",
    "binaryTargets": [],
    "config": {},
    "isCustomOutput": true
  },
  "sqliteDatasourceOverrides": [],
  "relativePath": "..",
  "internalDatasources": [
    {
      "name": "db",
      "connectorType": "postgresql",
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": "postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
      }
    }
  ],
  "clientVersion": "2.0.0"
}
config.document = dmmf
config.dirname = __dirname

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient