
import BluebirdPromise = require("bluebird");

export interface GroupsAndEmails {
  groups: string[];
  emails: string[];
}

export interface IClient {
  open(): BluebirdPromise<void>;
  close(): BluebirdPromise<void>;
  searchUserDn(username: string): BluebirdPromise<string>;
  searchEmails(username: string): BluebirdPromise<string[]>;
  searchGroups(username: string): BluebirdPromise<string[]>;
  modifyPassword(username: string, newPassword: string): BluebirdPromise<void>;
}