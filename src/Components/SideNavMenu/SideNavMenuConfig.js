export const Menu = [{
    id:'NEW',
    name:'New Application',
    image : require('../../html/assets/images/new-application-ic.svg').default,
    dashimage : require('../../html/assets/images/new-application.svg').default,
    showOnDashboard: true
},{
    id:'LAF',
    name:'LAF Status',
    image : require('../../html/assets/images/laf-status-ic.svg').default,
    dashimage : require('../../html/assets/images/laf-status.svg').default,
    showOnDashboard: true
},{
    id:'LUC',
    name:'LUC Check',
    image : require('../../html/assets/images/luc-check-ic.svg').default,
    dashimage : require('../../html/assets/images/luc-check.svg').default,
    showOnDashboard: true,
    navigation : '/dashboard/luc/luc_check'
},{
    id:'VA',
    name:'Village Addition',
    image : require('../../html/assets/images/village-addition-ic.svg').default,
    dashimage : require('../../html/assets/images/village-addition.svg').default,
    showOnDashboard: true
},{
    id:'CB',
    name:'CB Rejection Data',
    image : require('../../html/assets/images/cb-approval-ic.svg').default,
    dashimage : require('../../html/assets/images/cb-deviation-data.svg').default,
    showOnDashboard: true
},{
    id:'FAC',
    name:'Fees and Charges',
    image : require('../../html/assets/images/fees-and-charges-ic.svg').default,
    dashimage : require('../../html/assets/images/fees-and-charges.svg').default,
    showOnDashboard: true
},{
    id:'REVIEW',
    name:'Review',
    image : require('../../html/assets/images/new-application-ic.svg').default,
    dashimage : require('../../html/assets/images/new-application.svg').default,
    showOnDashboard: true,
    navigation : '/dashboard/review'
},{
    id:'GRT',
    name:'GRT',
    image : require('../../html/assets/images/laf-status-ic.svg').default,
    dashimage : require('../../html/assets/images/laf-status.svg').default,
    showOnDashboard: true
},{
    id:'PD',
    name:'PD',
    image : require('../../html/assets/images/pd-menu-ic.svg').default,
    dashimage : require('../../html/assets/images/pd-ic.svg').default,
    showOnDashboard: true
}]

export const SideNavMenuConfig_BM = [{
    name:'Review',
    image : require('../../html/assets/images/new-application-ic.svg').default,
    dashimage : require('../../html/assets/images/new-application.svg').default,
    showOnDashboard: true,
    navigation : '/dashboard/review'
},{
    name:'GRT',
    image : require('../../html/assets/images/laf-status-ic.svg').default,
    dashimage : require('../../html/assets/images/laf-status.svg').default,
    showOnDashboard: true
},{
    name:'PD',
    image : require('../../html/assets/images/pd-menu-ic.svg').default,
    dashimage : require('../../html/assets/images/pd-ic.svg').default,
    showOnDashboard: true
},{
    name:'LAF Status',
    image : require('../../html/assets/images/laf-menu-ic.svg').default,
    dashimage : require('../../html/assets/images/luck-check-status.svg').default,
    showOnDashboard: true
},{
    name:'LUC Approval',
    image : require('../../html/assets/images/luc-check-ic.svg').default,
    dashimage : require('../../html/assets/images/luc-check.svg').default,
    showOnDashboard: true
},{
    name:'CB Deviation Approval',
    image : require('../../html/assets/images/cb-deviation-menu-ic.svg').default,
    dashimage : require('../../html/assets/images/CB-Deviation-ic.svg').default,
    showOnDashboard: true
}]

export const GeneralMenu = [{
    id:'NEW',
    name:'New Application',
    image : require('../../html/assets/images/new-application-ic.svg').default,
    dashimage : require('../../html/assets/images/new-application.svg').default,
    showOnDashboard: true,
    navigation : '/dashboard/newapplication/searchclient'
},{
    name:'Notification',
    image : require('../../html/assets/images/ic-notification.svg').default,
    showOnDashboard: false
},{
    name:'Help',
    image : require('../../html/assets/images/help-ic.svg').default,
    showOnDashboard: false,
    hasSubMenu : true,
    subMenu : [ { 
        name : 'Contact Us',
    }, {
        name : 'Restricted'
    }, {
        name : 'FAQs'
    },, {
        name : 'Videos'
    }
        
    ]
},{
    name:'Change Password',
    image : require('../../html/assets/images/change-password-ic.svg').default,
    showOnDashboard: false
}]