import users from '../data/users';

export default mock => {
    mock
        .onPost('https://mysite.ru/api/auth/login')
        .reply(({ data }) => {
            return new Promise(resolve => {
                setTimeout(() => {
                    const parsedData = JSON.parse(data);
                    const login = parsedData?.login;
                    const password = parsedData?.password;
                    resolve([200, { result: users.find(user => user.login === login && user.password === password) ?? null }]);
                }, 1000);
            });
        });
};
