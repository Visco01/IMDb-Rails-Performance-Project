require "application_system_test_case"

class TitleAkasTest < ApplicationSystemTestCase
  setup do
    @title_aka = title_akas(:one)
  end

  test "visiting the index" do
    visit title_akas_url
    assert_selector "h1", text: "Title akas"
  end

  test "should create title aka" do
    visit title_akas_url
    click_on "New title aka"

    check "Is original title" if @title_aka.is_original_title
    fill_in "Language", with: @title_aka.language
    fill_in "Ordering", with: @title_aka.ordering
    fill_in "Region", with: @title_aka.region
    fill_in "Title", with: @title_aka.title
    fill_in "Title", with: @title_aka.title_id
    click_on "Create Title aka"

    assert_text "Title aka was successfully created"
    click_on "Back"
  end

  test "should update Title aka" do
    visit title_aka_url(@title_aka)
    click_on "Edit this title aka", match: :first

    check "Is original title" if @title_aka.is_original_title
    fill_in "Language", with: @title_aka.language
    fill_in "Ordering", with: @title_aka.ordering
    fill_in "Region", with: @title_aka.region
    fill_in "Title", with: @title_aka.title
    fill_in "Title", with: @title_aka.title_id
    click_on "Update Title aka"

    assert_text "Title aka was successfully updated"
    click_on "Back"
  end

  test "should destroy Title aka" do
    visit title_aka_url(@title_aka)
    click_on "Destroy this title aka", match: :first

    assert_text "Title aka was successfully destroyed"
  end
end
