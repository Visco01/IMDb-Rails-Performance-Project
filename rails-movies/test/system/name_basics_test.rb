require "application_system_test_case"

class NameBasicsTest < ApplicationSystemTestCase
  setup do
    @name_basic = name_basics(:one)
  end

  test "visiting the index" do
    visit name_basics_url
    assert_selector "h1", text: "Name basics"
  end

  test "should create name basic" do
    visit name_basics_url
    click_on "New name basic"

    fill_in "Birth year", with: @name_basic.birth_year
    fill_in "Death year", with: @name_basic.death_year
    fill_in "Nconst", with: @name_basic.nconst
    fill_in "Primary name", with: @name_basic.primary_name
    click_on "Create Name basic"

    assert_text "Name basic was successfully created"
    click_on "Back"
  end

  test "should update Name basic" do
    visit name_basic_url(@name_basic)
    click_on "Edit this name basic", match: :first

    fill_in "Birth year", with: @name_basic.birth_year
    fill_in "Death year", with: @name_basic.death_year
    fill_in "Nconst", with: @name_basic.nconst
    fill_in "Primary name", with: @name_basic.primary_name
    click_on "Update Name basic"

    assert_text "Name basic was successfully updated"
    click_on "Back"
  end

  test "should destroy Name basic" do
    visit name_basic_url(@name_basic)
    click_on "Destroy this name basic", match: :first

    assert_text "Name basic was successfully destroyed"
  end
end
