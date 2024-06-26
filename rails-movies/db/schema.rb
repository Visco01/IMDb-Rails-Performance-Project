# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_06_21_070748) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "attrs", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
  end

  create_table "attrs_title_akas", id: false, force: :cascade do |t|
    t.bigint "title_aka_id", null: false
    t.bigint "attr_id", null: false
    t.index ["attr_id", "title_aka_id"], name: "index_attrs_title_akas_on_attr_id_and_title_aka_id"
    t.index ["title_aka_id", "attr_id"], name: "index_attrs_title_akas_on_title_aka_id_and_attr_id"
  end

  create_table "directors", id: false, force: :cascade do |t|
    t.bigint "title_crew_id", null: false
    t.bigint "name_basic_id", null: false
    t.index ["name_basic_id", "title_crew_id"], name: "index_directors_on_name_basic_id_and_title_crew_id"
    t.index ["title_crew_id", "name_basic_id"], name: "index_directors_on_title_crew_id_and_name_basic_id"
  end

  create_table "genres", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_genres_on_name", unique: true
  end

  create_table "genres_title_basics", id: false, force: :cascade do |t|
    t.bigint "title_basic_id", null: false
    t.bigint "genre_id", null: false
    t.index ["genre_id", "title_basic_id"], name: "index_genres_title_basics_on_genre_id_and_title_basic_id"
    t.index ["title_basic_id", "genre_id"], name: "index_genres_title_basics_on_title_basic_id_and_genre_id"
  end

  create_table "name_basics", force: :cascade do |t|
    t.integer "nconst", null: false
    t.string "primary_name", null: false
    t.integer "birth_year", null: false
    t.integer "death_year"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["nconst"], name: "index_name_basics_on_nconst", unique: true
    t.index ["primary_name"], name: "index_name_basics_on_primary_name"
  end

  create_table "name_basics_professions", id: false, force: :cascade do |t|
    t.bigint "name_basic_id", null: false
    t.bigint "profession_id", null: false
    t.index ["name_basic_id", "profession_id"], name: "idx_on_name_basic_id_profession_id_a8276b2d00"
    t.index ["profession_id", "name_basic_id"], name: "idx_on_profession_id_name_basic_id_525f610568"
  end

  create_table "name_basics_title_basics", id: false, force: :cascade do |t|
    t.bigint "name_basic_id", null: false
    t.bigint "title_basic_id", null: false
    t.index ["name_basic_id", "title_basic_id"], name: "idx_on_name_basic_id_title_basic_id_02e1757f37"
    t.index ["title_basic_id", "name_basic_id"], name: "idx_on_title_basic_id_name_basic_id_c48fb22904"
  end

  create_table "professions", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_professions_on_name", unique: true
  end

  create_table "title_akas", force: :cascade do |t|
    t.integer "title_id", null: false
    t.integer "ordering"
    t.string "title"
    t.string "region"
    t.string "language"
    t.boolean "is_original_title"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "title_akas_types", id: false, force: :cascade do |t|
    t.bigint "title_aka_id", null: false
    t.bigint "type_id", null: false
    t.index ["title_aka_id", "type_id"], name: "index_title_akas_types_on_title_aka_id_and_type_id"
    t.index ["type_id", "title_aka_id"], name: "index_title_akas_types_on_type_id_and_title_aka_id"
  end

  create_table "title_basics", force: :cascade do |t|
    t.integer "tconst", null: false
    t.string "title_type"
    t.string "primary_title"
    t.string "original_title"
    t.boolean "is_adult"
    t.integer "start_year"
    t.integer "end_year"
    t.integer "runtime_minutes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["is_adult"], name: "index_title_basics_on_is_adult"
    t.index ["primary_title"], name: "index_title_basics_on_primary_title"
    t.index ["runtime_minutes"], name: "index_title_basics_on_runtime_minutes"
    t.index ["tconst"], name: "index_title_basics_on_tconst", unique: true
  end

  create_table "title_crews", force: :cascade do |t|
    t.integer "tconst", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "title_episodes", force: :cascade do |t|
    t.integer "tconst", null: false
    t.integer "parent_tconst"
    t.integer "season_number"
    t.integer "episode_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "title_principals", force: :cascade do |t|
    t.integer "tconst", null: false
    t.integer "ordering"
    t.integer "nconst", null: false
    t.string "category"
    t.string "job"
    t.string "characters"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["id", "nconst"], name: "unique_principal_index", unique: true
  end

  create_table "title_ratings", force: :cascade do |t|
    t.integer "tconst", null: false
    t.float "average_rating"
    t.integer "num_votes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["tconst"], name: "index_title_ratings_on_tconst", unique: true
  end

  create_table "types", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "writers", id: false, force: :cascade do |t|
    t.bigint "title_crew_id", null: false
    t.bigint "name_basic_id", null: false
    t.index ["name_basic_id", "title_crew_id"], name: "index_writers_on_name_basic_id_and_title_crew_id"
    t.index ["title_crew_id", "name_basic_id"], name: "index_writers_on_title_crew_id_and_name_basic_id"
  end

  add_foreign_key "attrs_title_akas", "attrs"
  add_foreign_key "attrs_title_akas", "title_akas"
  add_foreign_key "directors", "name_basics"
  add_foreign_key "directors", "title_crews"
  add_foreign_key "genres_title_basics", "genres"
  add_foreign_key "genres_title_basics", "title_basics"
  add_foreign_key "name_basics_professions", "name_basics"
  add_foreign_key "name_basics_professions", "professions"
  add_foreign_key "name_basics_title_basics", "name_basics"
  add_foreign_key "name_basics_title_basics", "title_basics"
  add_foreign_key "title_akas", "title_basics", column: "title_id"
  add_foreign_key "title_akas_types", "title_akas"
  add_foreign_key "title_akas_types", "types"
  add_foreign_key "title_crews", "title_basics", column: "id"
  add_foreign_key "title_episodes", "title_basics", column: "parent_tconst"
  add_foreign_key "title_principals", "name_basics", column: "nconst"
  add_foreign_key "title_principals", "title_basics", column: "tconst"
  add_foreign_key "title_ratings", "title_basics", column: "id"
  add_foreign_key "writers", "name_basics"
  add_foreign_key "writers", "title_crews"
end
