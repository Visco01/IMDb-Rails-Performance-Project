require "application_system_test_case"

class TitleCrewsTest < ApplicationSystemTestCase
  setup do
    @title_crew = title_crews(:one)
  end

  test "visiting the index" do
    visit title_crews_url
    assert_selector "h1", text: "Title crews"
  end

  test "should create title crew" do
    visit title_crews_url
    click_on "New title crew"

    fill_in "Tconst", with: @title_crew.tconst
    click_on "Create Title crew"

    assert_text "Title crew was successfully created"
    click_on "Back"
  end

  test "should update Title crew" do
    visit title_crew_url(@title_crew)
    click_on "Edit this title crew", match: :first

    fill_in "Tconst", with: @title_crew.tconst
    click_on "Update Title crew"

    assert_text "Title crew was successfully updated"
    click_on "Back"
  end

  test "should destroy Title crew" do
    visit title_crew_url(@title_crew)
    click_on "Destroy this title crew", match: :first

    assert_text "Title crew was successfully destroyed"
  end
end
