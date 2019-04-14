module.exports = [
    {
        name: '首頁',
        id: 'home',
        submenu: false,
        componentName: 'DashBoard'
    },
    {
        name: '授權管理',
        id: 'basic',
        submenu: true,
        sub: [{
            name: '授權微信公眾號',
            componentName: 'AuthorizationWeChat'
        }, {
            name: '授權小程序',
            componentName: 'AuthorizationApp'
        }]
    },
    {
        name: '營銷管理',
        id: 'marketing',
        submenu: true,
        sub: [{
            name: '用戶增長',
            componentName: 'UserGrowth'
        }, {
            name: '互動遊戲',
            componentName: 'Game'
        }]
    }, 
    {
        name: '帳戶管理',
        id: 'count',
        submenu: true,
        sub: [{
            name: '基本資料',
            componentName: 'BasicInfo'
        }, {
            name: '安全設置',
            componentName: 'SecuritySetting'
        }, {
            name: '通知管理',
            componentName: 'NoteManager'
        }, {
            name: '稷風大使',
            componentName: 'Ambassador'
        }]
    }
]