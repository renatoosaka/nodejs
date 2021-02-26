const test = require("tape")
const sinon = require("sinon")
const github = require("../github")
const octokitUserData = require("./octokitUserData")

test("Get github user by username", async (t) => {
  t.plan(3)

  sinon.stub(github, "getGithubUser").returns(octokitUserData)
  
  const githubUser = await github.getGithubUser("octokit")

  t.equal(githubUser.id, 3430433)
  t.equal(githubUser.login, "octokit")
  t.equal(githubUser.name, "Octokit")
})