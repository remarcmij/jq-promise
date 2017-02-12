(function($) {
    "use strict"

    function getJSON(url) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest()
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        let json = JSON.parse(xhr.responseText)
                        resolve(json)
                    } else {
                        reject(new Error(`HTTP error ${xhr.status} (${xhr.statusText})`))
                    }
                }
            }
            xhr.open('GET', url)
            xhr.send()
        })
    }

    let user = 'ideabile'
    let $profile = getJSON('https://api.github.com/users/' + user)
    let $repos = getJSON('https://api.github.com/users/' + user + '/repos')

    $profile.then(userInfo => {
        $('#name').html(userInfo.login)
        $('#img').attr('src', userInfo.avatar_url)
        return $repos
    }).then(repos => {
        for (let repo of repos) {
            $('#ol').append(`<li> <a href='${repo.clone_url}'>${repo.full_name}</a></li>`)
        }
    }).catch(err => console.log(err.message))

})(jQuery)