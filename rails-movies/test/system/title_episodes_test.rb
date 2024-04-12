require "application_system_test_case"

class TitleEpisodesTest < ApplicationSystemTestCase
  setup do
    @title_episode = title_episodes(:one)
  end

  test "visiting the index" do
    visit title_episodes_url
    assert_selector "h1", text: "Title episodes"
  end

  test "should create title episode" do
    visit title_episodes_url
    click_on "New title episode"

    fill_in "Episode number", with: @title_episode.episode_number
    fill_in "Parent tconst", with: @title_episode.parent_tconst
    fill_in "Season number", with: @title_episode.season_number
    fill_in "Tconst", with: @title_episode.tconst
    click_on "Create Title episode"

    assert_text "Title episode was successfully created"
    click_on "Back"
  end

  test "should update Title episode" do
    visit title_episode_url(@title_episode)
    click_on "Edit this title episode", match: :first

    fill_in "Episode number", with: @title_episode.episode_number
    fill_in "Parent tconst", with: @title_episode.parent_tconst
    fill_in "Season number", with: @title_episode.season_number
    fill_in "Tconst", with: @title_episode.tconst
    click_on "Update Title episode"

    assert_text "Title episode was successfully updated"
    click_on "Back"
  end

  test "should destroy Title episode" do
    visit title_episode_url(@title_episode)
    click_on "Destroy this title episode", match: :first

    assert_text "Title episode was successfully destroyed"
  end
end
