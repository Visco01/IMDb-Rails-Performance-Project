require "application_system_test_case"

class ProfessionsTest < ApplicationSystemTestCase
  setup do
    @profession = professions(:one)
  end

  test "visiting the index" do
    visit professions_url
    assert_selector "h1", text: "Professions"
  end

  test "should create profession" do
    visit professions_url
    click_on "New profession"

    fill_in "Name", with: @profession.name
    click_on "Create Profession"

    assert_text "Profession was successfully created"
    click_on "Back"
  end

  test "should update Profession" do
    visit profession_url(@profession)
    click_on "Edit this profession", match: :first

    fill_in "Name", with: @profession.name
    click_on "Update Profession"

    assert_text "Profession was successfully updated"
    click_on "Back"
  end

  test "should destroy Profession" do
    visit profession_url(@profession)
    click_on "Destroy this profession", match: :first

    assert_text "Profession was successfully destroyed"
  end
end
