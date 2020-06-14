import {
  DMMF,
  DMMFClass,
  Engine,
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  sqltag as sql,
  empty,
  join,
  raw,
} from './runtime';

export { PrismaClientKnownRequestError }
export { PrismaClientUnknownRequestError }
export { PrismaClientRustPanicError }
export { PrismaClientInitializationError }
export { PrismaClientValidationError }

/**
 * Re-export of sql-template-tag
 */
export { sql, empty, join, raw }

/**
 * Prisma Client JS version: 2.0.0
 * Query Engine version: de2bc1cbdb5561ad73d2f08463fa2eec48993f56
 */
export declare type PrismaVersion = {
  client: string
}

export declare const prismaVersion: PrismaVersion 

/**
 * Utility Types
 */

/**
 * From https://github.com/sindresorhus/type-fest/
 * Matches a JSON object.
 * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
 */
declare type JsonObject = {[Key in string]?: JsonValue}
 
/**
 * From https://github.com/sindresorhus/type-fest/
 * Matches a JSON array.
 */
declare interface JsonArray extends Array<JsonValue> {}
 
/**
 * From https://github.com/sindresorhus/type-fest/
 * Matches any valid JSON value.
 */
declare type JsonValue = string | number | boolean | null | JsonObject | JsonArray

declare type SelectAndInclude = {
  select: any
  include: any
}

declare type HasSelect = {
  select: any
}

declare type HasInclude = {
  include: any
}

declare type CheckSelect<T, S, U> = T extends SelectAndInclude
  ? 'Please either choose `select` or `include`'
  : T extends HasSelect
  ? U
  : T extends HasInclude
  ? U
  : S

/**
 * Get the type of the value, that the Promise holds.
 */
export declare type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

/**
 * Get the return type of a function which returns a Promise.
 */
export declare type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>


export declare type Enumerable<T> = T | Array<T>;

export declare type TrueKeys<T> = {
  [key in keyof T]: T[key] extends false | undefined | null ? never : key
}[keyof T]

/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export declare type Subset<T, U> = {
  [key in keyof T]: key extends keyof U ? T[key] : never;
};
declare class PrismaClientFetcher {
  private readonly prisma;
  private readonly debug;
  private readonly hooks?;
  constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
  request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string, collectTimestamps?: any): Promise<T>;
  sanitizeMessage(message: string): string;
  protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
}


/**
 * Client
**/


export type Datasources = {
  db?: string
}

export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

export interface PrismaClientOptions {
  /**
   * Overwrites the datasource url from your prisma.schema file
   */
  datasources?: Datasources

  /**
   * @default "colorless"
   */
  errorFormat?: ErrorFormat

  /**
   * @example
   * ```
   * // Defaults to stdout
   * log: ['query', 'info', 'warn', 'error']
   * 
   * // Emit as events
   * log: [
   *  { emit: 'stdout', level: 'query' },
   *  { emit: 'stdout', level: 'info' },
   *  { emit: 'stdout', level: 'warn' }
   *  { emit: 'stdout', level: 'error' }
   * ]
   * ```
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
   */
  log?: Array<LogLevel | LogDefinition>

  /**
   * You probably don't want to use this. `__internal` is used by internal tooling.
   */
  __internal?: {
    debug?: boolean
    hooks?: Hooks
    engine?: {
      cwd?: string
      binaryPath?: string
    }
    measurePerformance?: boolean
  }
}

export type Hooks = {
  beforeRequest?: (options: {query: string, path: string[], rootField?: string, typeName?: string, document: any}) => any
}

/* Types for Logging */
export type LogLevel = 'info' | 'query' | 'warn' | 'error'
export type LogDefinition = {
  level: LogLevel
  emit: 'stdout' | 'event'
}

export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
export type GetEvents<T extends Array<LogLevel | LogDefinition>> = GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]> 

export type QueryEvent = {
  timestamp: Date
  query: string
  params: string
  duration: number
  target: string
}

export type LogEvent = {
  timestamp: Date
  message: string
  target: string
}
/* End Types for Logging */

// tested in getLogLevel.test.ts
export declare function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js (ORM replacement)
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Customers
 * const customers = await prisma.customer.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://github.com/prisma/prisma/blob/master/docs/prisma-client-js/api.md).
 */
export declare class PrismaClient<
  T extends PrismaClientOptions = PrismaClientOptions,
  U = keyof T extends 'log' ? T['log'] extends Array<LogLevel | LogDefinition> ? GetEvents<T['log']> : never : never
> {
  /**
   * @private
   */
  private fetcher;
  /**
   * @private
   */
  private readonly dmmf;
  /**
   * @private
   */
  private connectionPromise?;
  /**
   * @private
   */
  private disconnectionPromise?;
  /**
   * @private
   */
  private readonly engineConfig;
  /**
   * @private
   */
  private readonly measurePerformance;
  /**
   * @private
   */
  private engine: Engine;
  /**
   * @private
   */
  private errorFormat: ErrorFormat;

  /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js (ORM replacement)
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Customers
   * const customers = await prisma.customer.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://github.com/prisma/prisma/blob/master/docs/prisma-client-js/api.md).
   */
  constructor(optionsArg?: T);
  on<V extends U>(eventType: V, callback: (event: V extends 'query' ? QueryEvent : LogEvent) => void): void;
  /**
   * Connect with the database
   */
  connect(): Promise<void>;
  /**
   * @private
   */
  private runDisconnect;
  /**
   * Disconnect from the database
   */
  disconnect(): Promise<any>;

  /**
   * Executes a raw query and returns the number of affected rows
   * @example
   * ```
   * // With parameters use prisma.executeRaw``, values will be escaped automatically
   * const result = await prisma.executeRaw`UPDATE User SET cool = ${true} WHERE id = ${1};`
   * // Or
   * const result = await prisma.executeRaw('UPDATE User SET cool = $1 WHERE id = $2 ;', true, 1)
  * ```
  * 
  * Read more in our [docs](https://github.com/prisma/prisma/blob/master/docs/prisma-client-js/api.md#raw-database-access).
  */
  executeRaw<T = any>(query: string | TemplateStringsArray, ...values: any[]): Promise<number>;

  /**
   * Performs a raw query and returns the SELECT data
   * @example
   * ```
   * // With parameters use prisma.queryRaw``, values will be escaped automatically
   * const result = await prisma.queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'ema.il'};`
   * // Or
   * const result = await prisma.queryRaw('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'ema.il')
  * ```
  * 
  * Read more in our [docs](https://github.com/prisma/prisma/blob/master/docs/prisma-client-js/api.md#raw-database-access).
  */
  queryRaw<T = any>(query: string | TemplateStringsArray, ...values: any[]): Promise<T>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): CustomerDelegate;
}



/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export declare const OrderByArg: {
  asc: 'asc',
  desc: 'desc'
};

export declare type OrderByArg = (typeof OrderByArg)[keyof typeof OrderByArg]



/**
 * Model Customer
 */

export type Customer = {
  id: number
  name: string
}

export type CustomerSelect = {
  id?: boolean
  name?: boolean
}

export type CustomerGetPayload<
  S extends boolean | null | undefined | CustomerArgs,
  U = keyof S
> = S extends true
  ? Customer
  : S extends undefined
  ? never
  : S extends CustomerArgs | FindManyCustomerArgs
  ? 'include' extends U
    ? Customer 
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof Customer ? Customer[P]
: 
 never
    }
  : Customer
: Customer


export interface CustomerDelegate {
  /**
   * Find zero or one Customer.
   * @param {FindOneCustomerArgs} args - Arguments to find a Customer
   * @example
   * // Get one Customer
   * const customer = await prisma.customer.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneCustomerArgs>(
    args: Subset<T, FindOneCustomerArgs>
  ): CheckSelect<T, CustomerClient<Customer | null>, CustomerClient<CustomerGetPayload<T> | null>>
  /**
   * Find zero or more Customers.
   * @param {FindManyCustomerArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Customers
   * const customers = await prisma.customer.findMany()
   * 
   * // Get first 10 Customers
   * const customers = await prisma.customer.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyCustomerArgs>(
    args?: Subset<T, FindManyCustomerArgs>
  ): CheckSelect<T, Promise<Array<Customer>>, Promise<Array<CustomerGetPayload<T>>>>
  /**
   * Create a Customer.
   * @param {CustomerCreateArgs} args - Arguments to create a Customer.
   * @example
   * // Create one Customer
   * const user = await prisma.customer.create({
   *   data: {
   *     // ... data to create a Customer
   *   }
   * })
   * 
  **/
  create<T extends CustomerCreateArgs>(
    args: Subset<T, CustomerCreateArgs>
  ): CheckSelect<T, CustomerClient<Customer>, CustomerClient<CustomerGetPayload<T>>>
  /**
   * Delete a Customer.
   * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
   * @example
   * // Delete one Customer
   * const user = await prisma.customer.delete({
   *   where: {
   *     // ... filter to delete one Customer
   *   }
   * })
   * 
  **/
  delete<T extends CustomerDeleteArgs>(
    args: Subset<T, CustomerDeleteArgs>
  ): CheckSelect<T, CustomerClient<Customer>, CustomerClient<CustomerGetPayload<T>>>
  /**
   * Update one Customer.
   * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
   * @example
   * // Update one Customer
   * const customer = await prisma.customer.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  update<T extends CustomerUpdateArgs>(
    args: Subset<T, CustomerUpdateArgs>
  ): CheckSelect<T, CustomerClient<Customer>, CustomerClient<CustomerGetPayload<T>>>
  /**
   * Delete zero or more Customers.
   * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
   * @example
   * // Delete a few Customers
   * const { count } = await prisma.customer.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends CustomerDeleteManyArgs>(
    args: Subset<T, CustomerDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more Customers.
   * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Customers
   * const customer = await prisma.customer.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  updateMany<T extends CustomerUpdateManyArgs>(
    args: Subset<T, CustomerUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one Customer.
   * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
   * @example
   * // Update or create a Customer
   * const customer = await prisma.customer.upsert({
   *   create: {
   *     // ... data to create a Customer
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the Customer we want to update
   *   }
   * })
  **/
  upsert<T extends CustomerUpsertArgs>(
    args: Subset<T, CustomerUpsertArgs>
  ): CheckSelect<T, CustomerClient<Customer>, CustomerClient<CustomerGetPayload<T>>>
  /**
   * 
   */
  count(args?: Omit<FindManyCustomerArgs, 'select' | 'include'>): Promise<number>
}

export declare class CustomerClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  private _collectTimestamps?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';


  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * Customer findOne
 */
export type FindOneCustomerArgs = {
  /**
   * Select specific fields to fetch from the Customer
  **/
  select?: CustomerSelect | null
  /**
   * Filter, which Customer to fetch.
  **/
  where: CustomerWhereUniqueInput
}


/**
 * Customer findMany
 */
export type FindManyCustomerArgs = {
  /**
   * Select specific fields to fetch from the Customer
  **/
  select?: CustomerSelect | null
  /**
   * Filter, which Customers to fetch.
  **/
  where?: CustomerWhereInput
  /**
   * Determine the order of the Customers to fetch.
  **/
  orderBy?: CustomerOrderByInput
  /**
   * Sets the position for listing Customers.
  **/
  cursor?: CustomerWhereUniqueInput
  /**
   * The number of Customers to fetch. If negative number, it will take Customers before the `cursor`.
  **/
  take?: number
  /**
   * Skip the first `n` Customers.
  **/
  skip?: number
}


/**
 * Customer create
 */
export type CustomerCreateArgs = {
  /**
   * Select specific fields to fetch from the Customer
  **/
  select?: CustomerSelect | null
  /**
   * The data needed to create a Customer.
  **/
  data: CustomerCreateInput
}


/**
 * Customer update
 */
export type CustomerUpdateArgs = {
  /**
   * Select specific fields to fetch from the Customer
  **/
  select?: CustomerSelect | null
  /**
   * The data needed to update a Customer.
  **/
  data: CustomerUpdateInput
  /**
   * Choose, which Customer to update.
  **/
  where: CustomerWhereUniqueInput
}


/**
 * Customer updateMany
 */
export type CustomerUpdateManyArgs = {
  data: CustomerUpdateManyMutationInput
  where?: CustomerWhereInput
}


/**
 * Customer upsert
 */
export type CustomerUpsertArgs = {
  /**
   * Select specific fields to fetch from the Customer
  **/
  select?: CustomerSelect | null
  /**
   * The filter to search for the Customer to update in case it exists.
  **/
  where: CustomerWhereUniqueInput
  /**
   * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
  **/
  create: CustomerCreateInput
  /**
   * In case the Customer was found with the provided `where` argument, update it with this data.
  **/
  update: CustomerUpdateInput
}


/**
 * Customer delete
 */
export type CustomerDeleteArgs = {
  /**
   * Select specific fields to fetch from the Customer
  **/
  select?: CustomerSelect | null
  /**
   * Filter which Customer to delete.
  **/
  where: CustomerWhereUniqueInput
}


/**
 * Customer deleteMany
 */
export type CustomerDeleteManyArgs = {
  where?: CustomerWhereInput
}


/**
 * Customer without action
 */
export type CustomerArgs = {
  /**
   * Select specific fields to fetch from the Customer
  **/
  select?: CustomerSelect | null
}



/**
 * Deep Input Types
 */


export type CustomerWhereInput = {
  id?: number | IntFilter
  name?: string | StringFilter
  AND?: Enumerable<CustomerWhereInput>
  OR?: Array<CustomerWhereInput>
  NOT?: Enumerable<CustomerWhereInput>
}

export type CustomerWhereUniqueInput = {
  id?: number
}

export type CustomerCreateInput = {
  id: number
  name: string
}

export type CustomerUpdateInput = {
  id?: number
  name?: string
}

export type CustomerUpdateManyMutationInput = {
  id?: number
  name?: string
}

export type IntFilter = {
  equals?: number
  not?: number | IntFilter
  in?: Enumerable<number>
  notIn?: Enumerable<number>
  lt?: number
  lte?: number
  gt?: number
  gte?: number
}

export type StringFilter = {
  equals?: string
  not?: string | StringFilter
  in?: Enumerable<string>
  notIn?: Enumerable<string>
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
}

export type CustomerOrderByInput = {
  id?: OrderByArg | null
  name?: OrderByArg | null
}

/**
 * Batch Payload for updateMany & deleteMany
 */

export type BatchPayload = {
  count: number
}

/**
 * DMMF
 */
export declare const dmmf: DMMF.Document;
export {};
