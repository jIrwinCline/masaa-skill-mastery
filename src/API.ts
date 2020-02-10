/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSkillInput = {
  id?: string | null,
  title: string,
  description?: string | null,
  hours: string,
};

export type ModelSkillConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  hours?: ModelStringInput | null,
  and?: Array< ModelSkillConditionInput | null > | null,
  or?: Array< ModelSkillConditionInput | null > | null,
  not?: ModelSkillConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateSkillInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  hours?: string | null,
};

export type DeleteSkillInput = {
  id?: string | null,
};

export type ModelSkillFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  hours?: ModelStringInput | null,
  and?: Array< ModelSkillFilterInput | null > | null,
  or?: Array< ModelSkillFilterInput | null > | null,
  not?: ModelSkillFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type CreateSkillMutationVariables = {
  input: CreateSkillInput,
  condition?: ModelSkillConditionInput | null,
};

export type CreateSkillMutation = {
  createSkill:  {
    __typename: "Skill",
    id: string,
    title: string,
    description: string | null,
    hours: string,
  } | null,
};

export type UpdateSkillMutationVariables = {
  input: UpdateSkillInput,
  condition?: ModelSkillConditionInput | null,
};

export type UpdateSkillMutation = {
  updateSkill:  {
    __typename: "Skill",
    id: string,
    title: string,
    description: string | null,
    hours: string,
  } | null,
};

export type DeleteSkillMutationVariables = {
  input: DeleteSkillInput,
  condition?: ModelSkillConditionInput | null,
};

export type DeleteSkillMutation = {
  deleteSkill:  {
    __typename: "Skill",
    id: string,
    title: string,
    description: string | null,
    hours: string,
  } | null,
};

export type GetSkillQueryVariables = {
  id: string,
};

export type GetSkillQuery = {
  getSkill:  {
    __typename: "Skill",
    id: string,
    title: string,
    description: string | null,
    hours: string,
  } | null,
};

export type ListSkillsQueryVariables = {
  filter?: ModelSkillFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSkillsQuery = {
  listSkills:  {
    __typename: "ModelSkillConnection",
    items:  Array< {
      __typename: "Skill",
      id: string,
      title: string,
      description: string | null,
      hours: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateSkillSubscription = {
  onCreateSkill:  {
    __typename: "Skill",
    id: string,
    title: string,
    description: string | null,
    hours: string,
  } | null,
};

export type OnUpdateSkillSubscription = {
  onUpdateSkill:  {
    __typename: "Skill",
    id: string,
    title: string,
    description: string | null,
    hours: string,
  } | null,
};

export type OnDeleteSkillSubscription = {
  onDeleteSkill:  {
    __typename: "Skill",
    id: string,
    title: string,
    description: string | null,
    hours: string,
  } | null,
};
