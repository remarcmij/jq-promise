(function($) {
    "use strict"

    let user = 'ideabile'
    let $profile = $.getJSON('https://api.github.com/users/' + user)
    let $repos = $.getJSON('https://api.github.com/users/' + user + '/repos')

    $profile.then(userInfo => {
        $('#name').html(userInfo.login)
        $('#img').attr('src', userInfo.avatar_url)
        return $repos
    }).then(repos => {
        for (let repo of repos) {
            $('#ol').append(`<li> <a href='${repo.clone_url}'>${repo.full_name}</a></li>`)
        }
    }).catch(jqXHR => console.log(`HTTP error ${jqXHR.status} (${jqXHR.statusText})`))

})(jQuery)