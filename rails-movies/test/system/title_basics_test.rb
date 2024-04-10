require "application_system_test_case"

class TitleBasicsTest < ApplicationSystemTestCase
  setup do
    @title_basic = title_basics(:one)
  end

  test "visiting the index" do
    visit title_basics_url
    assert_selector "h1", text: "Title basics"
  end

  test "should create title basic" do
    visit title_basics_url
    click_on "New title basic"

    fill_in "End year", with: @title_basic.end_year
    check "Is adult" if @title_basic.is_adult
    fill_in "Original title", with: @title_basic.original_title
    fill_in "Primary title", with: @title_basic.primary_title
    fill_in "Runtime minutes", with: @title_basic.runtime_minutes
    fill_in "Start year", with: @title_basic.start_year
    fill_in "Tconst", with: @title_basic.tconst
    fill_in "Title type", with: @title_basic.title_type
    click_on "Create Title basic"

    assert_text "Title basic was successfully created"
    click_on "Back"
  end

  test "should update Title basic" do
    visit title_basic_url(@title_basic)
    click_on "Edit this title basic", match: :first

    fill_in "End year", with: @title_basic.end_year
    check "Is adult" if @title_basic.is_adult
    fill_in "Original title", with: @title_basic.original_title
    fill_in "Primary title", with: @title_basic.primary_title
    fill_in "Runtime minutes", with: @title_basic.runtime_minutes
    fill_in "Start year", with: @title_basic.start_year
    fill_in "Tconst", with: @title_basic.tconst
    fill_in "Title type", with: @title_basic.title_type
    click_on "Update Title basic"

    assert_text "Title basic was successfully updated"
    click_on "Back"
  end

  test "should destroy Title basic" do
    visit title_basic_url(@title_basic)
    click_on "Destroy this title basic", match: :first

    assert_text "Title basic was successfully destroyed"
  end
end
