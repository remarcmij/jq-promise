(function(w, $) {
    "use strict";

    function GitHubUser(user) {
        this.user = user
    }

    GitHubUser.prototype.getUserInfo = function() {
        return $.ajax({
            url: 'https://api.github.com/users/' + this.user,
            context: document.body
        })
    }

    GitHubUser.prototype.getRepos = function() {
        return $.ajax({
            url: 'https://api.github.com/users/' + this.user + '/repos',
            context: document.body
        })
    }

    // Expecting
    var githubUser = new GitHubUser('ideabile');
    githubUser.getUserInfo()
        .then(function(userInfo) {
            $('#name').html(userInfo.login);
            $('#img').attr('src', userInfo.avatar_url);
            return githubUser.getRepos();
        })
        .then(function(repos) {
            for (let repo of repos) {
                $('#ol').append(`<li> <a href='${repo.clone_url}'>${repo.full_name}</a></li>`)
            }
        }).then(null, function(jqXHR) {
            console.log(`HTTP error ${jqXHR.status} (${jqXHR.statusText})`);
        });

})(window, jQuery);