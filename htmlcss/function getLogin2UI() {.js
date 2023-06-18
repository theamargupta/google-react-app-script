function getLogin2UI() {
  google.script.run
    .withSuccessHandler(success)
    .withFailureHandler(failure)
    .getLoginCredential();
}

function success(result) {
  alert(result);
}

function failure(error) {
  alert(error);
}

function returnToWelcomePage() {
  google.script.run.getWelcomeUI();
}

function loginToGoogle() {
  alert("Need to discuss");
}
