Package.describe({
  name: 'theredone447:manage-users-foundation-theme',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Foundation theme for the Manage-Users smart package',
  // URL to the Git repository containing the source code for this package.
  git: 'git@github.com:TheRedOne447/meteor-manage-users-foundation-theme.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.add_files('client/foundation/accounts_admin.html','client');
  api.add_files('client/foundation/delete_account_modal.html','client');
  api.add_files('client/foundation/info_account_modal.html','client');
  api.add_files('client/foundation/update_account_modal.html','client');
  api.add_files('client/foundation/update_roles_modal.html','client');
  api.add_files('client/foundation/add_user_modal.html','client');
  api.add_files('client/foundation/functions.js','client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('theredone447:manage-users-foundation-theme');
  api.addFiles('manage-users-foundation-theme-tests.js');
});
