require "application_system_test_case"

class TitlePrincipalsTest < ApplicationSystemTestCase
  setup do
    @title_principal = title_principals(:one)
  end

  test "visiting the index" do
    visit title_principals_url
    assert_selector "h1", text: "Title principals"
  end

  test "should create title principal" do
    visit title_principals_url
    click_on "New title principal"

    fill_in "Category", with: @title_principal.category
    fill_in "Characters", with: @title_principal.characters
    fill_in "Job", with: @title_principal.job
    fill_in "Nconst", with: @title_principal.nconst
    fill_in "Ordering", with: @title_principal.ordering
    fill_in "Tconst", with: @title_principal.tconst
    click_on "Create Title principal"

    assert_text "Title principal was successfully created"
    click_on "Back"
  end

  test "should update Title principal" do
    visit title_principal_url(@title_principal)
    click_on "Edit this title principal", match: :first

    fill_in "Category", with: @title_principal.category
    fill_in "Characters", with: @title_principal.characters
    fill_in "Job", with: @title_principal.job
    fill_in "Nconst", with: @title_principal.nconst
    fill_in "Ordering", with: @title_principal.ordering
    fill_in "Tconst", with: @title_principal.tconst
    click_on "Update Title principal"

    assert_text "Title principal was successfully updated"
    click_on "Back"
  end

  test "should destroy Title principal" do
    visit title_principal_url(@title_principal)
    click_on "Destroy this title principal", match: :first

    assert_text "Title principal was successfully destroyed"
  end
end
