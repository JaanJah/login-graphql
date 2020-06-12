export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type SignupInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type LoginInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UpdateUserInput = {
  email?: Maybe<Scalars['String']>;
  newPassword?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteUser: DeleteResult;
  login: LoginResult;
  signup: SignupResult;
  updateUser: UpdateResult;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationSignupArgs = {
  input: SignupInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type SignupResult = {
  __typename?: 'SignupResult';
  status: Scalars['Boolean'];
};

export type LoginResult = {
  __typename?: 'LoginResult';
  status: Scalars['Boolean'];
  token?: Maybe<Scalars['String']>;
};

export type DeleteResult = {
  __typename?: 'DeleteResult';
  status: Scalars['Boolean'];
};

export type UpdateResult = {
  __typename?: 'UpdateResult';
  status: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  getUser: UserResult;
};

export type UserResult = {
  __typename?: 'UserResult';
  email: Scalars['String'];
  username: Scalars['String'];
};
