require "test_helper"

class TitleEpisodesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @title_episode = title_episodes(:one)
  end

  test "should get index" do
    get title_episodes_url
    assert_response :success
  end

  test "should get new" do
    get new_title_episode_url
    assert_response :success
  end

  test "should create title_episode" do
    assert_difference("TitleEpisode.count") do
      post title_episodes_url, params: { title_episode: { episode_number: @title_episode.episode_number, parent_tconst: @title_episode.parent_tconst, season_number: @title_episode.season_number, tconst: @title_episode.tconst } }
    end

    assert_redirected_to title_episode_url(TitleEpisode.last)
  end

  test "should show title_episode" do
    get title_episode_url(@title_episode)
    assert_response :success
  end

  test "should get edit" do
    get edit_title_episode_url(@title_episode)
    assert_response :success
  end

  test "should update title_episode" do
    patch title_episode_url(@title_episode), params: { title_episode: { episode_number: @title_episode.episode_number, parent_tconst: @title_episode.parent_tconst, season_number: @title_episode.season_number, tconst: @title_episode.tconst } }
    assert_redirected_to title_episode_url(@title_episode)
  end

  test "should destroy title_episode" do
    assert_difference("TitleEpisode.count", -1) do
      delete title_episode_url(@title_episode)
    end

    assert_redirected_to title_episodes_url
  end
end
