function solution(id_pw, db) {
    let id = id_pw[0];
    let pw = id_pw[1];

    for (let i = 0; i < db.length; i++) {
        let checkId = db[i][0];
        let checkPw = db[i][1];

        if (id === checkId && pw === checkPw) {
            return "login";
        } else if (id === checkId && pw !== checkPw) {
            return "wrong pw";
        }
    }

    return "fail";
}