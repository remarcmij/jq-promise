(function(w, $) {
    "use strict";

    function GitHubUser(user) {
        this.user = user
        this.profile = $.getJSON('https://api.github.com/users/' + this.user)
        this.repos = $.getJSON('https://api.github.com/users/' + this.user + '/repos')
    }

    // Expecting
    var githubUser = new GitHubUser('ideabile');
    githubUser.profile
        .then(function(userInfo) {
            $('#name').html(userInfo.login);
            $('#img').attr('src', userInfo.avatar_url);
            return githubUser.repos;
        })
        .then(function(repos) {
            for (let repo of repos) {
                $('#ol').append(`<li> <a href='${repo.clone_url}'>${repo.full_name}</a></li>`)
            }
        }).then(null, function(jqXHR) {
            console.log(`HTTP error ${jqXHR.status} (${jqXHR.statusText})`);
        });

})(window, jQuery);