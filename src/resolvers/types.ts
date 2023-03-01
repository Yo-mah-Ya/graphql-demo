/* eslint-disable */
import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** A connection to a list of items. */
export type Connection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<Edge>>>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  nodes?: Maybe<Array<Maybe<Node>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type Edge = {
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node: Node;
};

export type Film = Node & {
  __typename?: 'Film';
  characterConnection?: Maybe<FilmCharactersConnection>;
  director: Scalars['String'];
  episodeId: Scalars['Int'];
  id: Scalars['ID'];
  title: Scalars['String'];
};


export type FilmCharacterConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
};

export type FilmCharactersConnection = {
  __typename?: 'FilmCharactersConnection';
  edges?: Maybe<Array<Maybe<FilmCharactersEdge>>>;
  nodes?: Maybe<Array<Maybe<Person>>>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type FilmCharactersEdge = {
  __typename?: 'FilmCharactersEdge';
  cursor: Scalars['String'];
  node?: Maybe<Person>;
};

export type FilmsConnection = {
  __typename?: 'FilmsConnection';
  edges?: Maybe<Array<Maybe<FilmsEdge>>>;
  nodes?: Maybe<Array<Maybe<Film>>>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type FilmsEdge = {
  __typename?: 'FilmsEdge';
  cursor: Scalars['String'];
  node?: Maybe<Film>;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
};

export type PeopleConnection = {
  __typename?: 'PeopleConnection';
  edges?: Maybe<Array<Maybe<PeopleEdge>>>;
  nodes?: Maybe<Array<Maybe<Person>>>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PeopleEdge = {
  __typename?: 'PeopleEdge';
  cursor: Scalars['String'];
  node?: Maybe<Person>;
};

export type Person = Node & {
  __typename?: 'Person';
  filmConnection?: Maybe<PersonFilmsConnection>;
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type PersonFilmConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
};

export type PersonFilmsConnection = {
  __typename?: 'PersonFilmsConnection';
  edges?: Maybe<Array<Maybe<PersonFilmsEdge>>>;
  nodes?: Maybe<Array<Maybe<Film>>>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PersonFilmsEdge = {
  __typename?: 'PersonFilmsEdge';
  cursor: Scalars['String'];
  node?: Maybe<Film>;
};

export type Query = {
  __typename?: 'Query';
  allFilms?: Maybe<FilmsConnection>;
  allPeople?: Maybe<PeopleConnection>;
  film?: Maybe<Film>;
  person?: Maybe<Person>;
};


export type QueryAllFilmsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
};


export type QueryAllPeopleArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
};


export type QueryFilmArgs = {
  filmID?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryPersonArgs = {
  id?: InputMaybe<Scalars['ID']>;
  personID?: InputMaybe<Scalars['ID']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Connection: never;
  Edge: never;
  Film: ResolverTypeWrapper<Film>;
  FilmCharactersConnection: ResolverTypeWrapper<FilmCharactersConnection>;
  FilmCharactersEdge: ResolverTypeWrapper<FilmCharactersEdge>;
  FilmsConnection: ResolverTypeWrapper<FilmsConnection>;
  FilmsEdge: ResolverTypeWrapper<FilmsEdge>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Node: ResolversTypes['Film'] | ResolversTypes['Person'];
  PageInfo: ResolverTypeWrapper<PageInfo>;
  PeopleConnection: ResolverTypeWrapper<PeopleConnection>;
  PeopleEdge: ResolverTypeWrapper<PeopleEdge>;
  Person: ResolverTypeWrapper<Person>;
  PersonFilmsConnection: ResolverTypeWrapper<PersonFilmsConnection>;
  PersonFilmsEdge: ResolverTypeWrapper<PersonFilmsEdge>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean'];
  Connection: never;
  Edge: never;
  Film: Film;
  FilmCharactersConnection: FilmCharactersConnection;
  FilmCharactersEdge: FilmCharactersEdge;
  FilmsConnection: FilmsConnection;
  FilmsEdge: FilmsEdge;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Node: ResolversParentTypes['Film'] | ResolversParentTypes['Person'];
  PageInfo: PageInfo;
  PeopleConnection: PeopleConnection;
  PeopleEdge: PeopleEdge;
  Person: Person;
  PersonFilmsConnection: PersonFilmsConnection;
  PersonFilmsEdge: PersonFilmsEdge;
  Query: {};
  String: Scalars['String'];
}>;

export type ConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Connection'] = ResolversParentTypes['Connection']> = ResolversObject<{
  __resolveType: TypeResolveFn<null, ParentType, ContextType>;
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['Edge']>>>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Node']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
}>;

export type EdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Edge'] = ResolversParentTypes['Edge']> = ResolversObject<{
  __resolveType: TypeResolveFn<null, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Node'], ParentType, ContextType>;
}>;

export type FilmResolvers<ContextType = any, ParentType extends ResolversParentTypes['Film'] = ResolversParentTypes['Film']> = ResolversObject<{
  characterConnection?: Resolver<Maybe<ResolversTypes['FilmCharactersConnection']>, ParentType, ContextType, RequireFields<FilmCharacterConnectionArgs, 'first'>>;
  director?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  episodeID?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FilmCharactersConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['FilmCharactersConnection'] = ResolversParentTypes['FilmCharactersConnection']> = ResolversObject<{
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['FilmCharactersEdge']>>>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Person']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FilmCharactersEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['FilmCharactersEdge'] = ResolversParentTypes['FilmCharactersEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FilmsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['FilmsConnection'] = ResolversParentTypes['FilmsConnection']> = ResolversObject<{
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['FilmsEdge']>>>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Film']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FilmsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['FilmsEdge'] = ResolversParentTypes['FilmsEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Film']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Film' | 'Person', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
}>;

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = ResolversObject<{
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PeopleConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PeopleConnection'] = ResolversParentTypes['PeopleConnection']> = ResolversObject<{
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['PeopleEdge']>>>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Person']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PeopleEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PeopleEdge'] = ResolversParentTypes['PeopleEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PersonResolvers<ContextType = any, ParentType extends ResolversParentTypes['Person'] = ResolversParentTypes['Person']> = ResolversObject<{
  filmConnection?: Resolver<Maybe<ResolversTypes['PersonFilmsConnection']>, ParentType, ContextType, RequireFields<PersonFilmConnectionArgs, 'first'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PersonFilmsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonFilmsConnection'] = ResolversParentTypes['PersonFilmsConnection']> = ResolversObject<{
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['PersonFilmsEdge']>>>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Film']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PersonFilmsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonFilmsEdge'] = ResolversParentTypes['PersonFilmsEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Film']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  allFilms?: Resolver<Maybe<ResolversTypes['FilmsConnection']>, ParentType, ContextType, RequireFields<QueryAllFilmsArgs, 'first'>>;
  allPeople?: Resolver<Maybe<ResolversTypes['PeopleConnection']>, ParentType, ContextType, RequireFields<QueryAllPeopleArgs, 'first'>>;
  film?: Resolver<Maybe<ResolversTypes['Film']>, ParentType, ContextType, Partial<QueryFilmArgs>>;
  person?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, Partial<QueryPersonArgs>>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Connection?: ConnectionResolvers<ContextType>;
  Edge?: EdgeResolvers<ContextType>;
  Film?: FilmResolvers<ContextType>;
  FilmCharactersConnection?: FilmCharactersConnectionResolvers<ContextType>;
  FilmCharactersEdge?: FilmCharactersEdgeResolvers<ContextType>;
  FilmsConnection?: FilmsConnectionResolvers<ContextType>;
  FilmsEdge?: FilmsEdgeResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  PeopleConnection?: PeopleConnectionResolvers<ContextType>;
  PeopleEdge?: PeopleEdgeResolvers<ContextType>;
  Person?: PersonResolvers<ContextType>;
  PersonFilmsConnection?: PersonFilmsConnectionResolvers<ContextType>;
  PersonFilmsEdge?: PersonFilmsEdgeResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
}>;

