/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable("user", (table) => {
  table.increments("id").primary();
  table.string("email").notNullable().unique();
  table.string("username").notNullable().unique();
  table.string("password_hash").notNullable();
  table.string("full_name").notNullable();
  table.string("gender").notNullable();
  table.date("dob").notNullable();
  table.string("avatar").nullable();
  table.timestamps(true, true);
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable("user");
