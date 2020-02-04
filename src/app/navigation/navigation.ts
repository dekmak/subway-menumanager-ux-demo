import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        icon: 'dashboard',
        url: '/apps/dashboards/project',
    },
    {
        id: 'inventory',
        title: 'INVENTORY',
        type: 'group',
        icon: 'apps',
        children: [
            {
                id: 'products',
                title: 'Products',
                type: 'item',
                url: '/apps/e-commerce/products',
                icon: 'shopping_cart',
                exactMatch: true
            },
            {
                id: 'products',
                title: 'Inventory Items',
                type: 'item',
                url: '/apps/e-commerce/inventory-items',
                icon: 'local_drink',
                exactMatch: true
            },
            {
                id: 'products',
                title: 'Ingredients',
                type: 'collapsable',
                icon: 'fastfood',
                children: [
                    {
                        id: 'products',
                        title: 'All Ingredients',
                        type: 'item',
                        url: '/apps/e-commerce/ingredients',
                        icon: 'fastfood',
                        exactMatch: true
                    },
                    {
                        id: 'products',
                        title: 'Ingredient Groups',
                        type: 'item',
                        url: '/apps/e-commerce/ingredient-groups',
                        icon: 'collections_bookmark',
                        exactMatch: true
                    }
                ]
            },
            {
                id: 'products',
                title: 'Descriptors',
                type: 'item',
                url: '/apps/e-commerce/descriptors',
                icon: 'description',
                exactMatch: true
            }
        ]
    },
    {
        id: 'marketing',
        title: 'MARKETING',
        type: 'group',
        icon: 'apps',
        children: [
            {
                id: 'offers',
                title: 'Offers',
                type: 'collapsable',
                icon: 'bookmark_border',
                children: [
                    {
                        id: 'offers',
                        title: 'All Offers',
                        type: 'item',
                        url: '/apps/e-commerce/offers',
                        icon: 'bookmark',
                        exactMatch: true
                    },
                    {
                        id: 'offer-sets',
                        title: 'Offer Sets',
                        type: 'item',
                        url: '/apps/e-commerce/offers-sets',
                        icon: 'bookmarks',
                        exactMatch: true
                    }
                ]
            },
            {
                id: 'promotions',
                title: 'Promotions',
                type: 'item',
                url: '/apps/e-commerce/promotions',
                icon: 'trending_up',
                exactMatch: true
            },
            {
                id: 'campaigns',
                title: 'Campaigns',
                type: 'item',
                url: '/apps/e-commerce/campaigns',
                icon: 'card_membership',
                exactMatch: true
            }
        ]
    },
    {
        id: 'marketing',
        title: 'INTERFACE',
        type: 'group',
        icon: 'apps',
        children: [
            {
                id: 'menus',
                title: 'Menus',
                type: 'item',
                url: '/apps/e-commerce/menus',
                icon: 'view_week',
                exactMatch: true
            },
            {
                id: 'screens',
                title: 'Screens',
                type: 'item',
                url: '/apps/e-commerce/screens',
                icon: 'personal_video',
                exactMatch: true
            }
        ]
    },
    {
        id: 'pages',
        title: 'ADMIN',
        type: 'group',
        icon: 'pages',
        children: [
            {
                id: 'security',
                title: 'Security',
                type: 'collapsable',
                icon: 'security',
                children: [
                    {
                        id: 'users',
                        title: 'Users',
                        type: 'item',
                        url: '/pages/security/users',
                        icon: 'person'
                    },
                    {
                        id: 'roles',
                        title: 'Roles',
                        type: 'item',
                        url: '/pages/security/roles',
                        icon: 'lock'
                    }
                ]
            },
            {
                id: 'lookups',
                title: 'Lookups',
                type: 'collapsable',
                icon: 'view_headline',
                children: [
                    {
                        id: 'lookups',
                        title: 'Main Lookups',
                        type: 'item',
                        url: '/pages/admin/lookups',
                        icon: 'list'
                    },
                    {
                        id: 'lookups',
                        title: 'Unit Of Measure',
                        type: 'item',
                        url: '/pages/admin/lookupsUOM',
                        icon: 'network_check'
                    }
                ]
            },
            {
                id: 'audit',
                title: 'Audit',
                type: 'item',
                url: '/apps/admin/audit',
                icon: 'track_changes',
                exactMatch: true
            },
            {
                id: 'adminpublish',
                title: 'Admin Publish',
                type: 'item',
                url: '/apps/admin/publish',
                icon: 'refresh',
                exactMatch: true
            },
            {
                id: 'lookups',
                title: 'Localization',
                type: 'collapsable',
                icon: 'view_headline',
                children: [
                    {
                        id: 'languages',
                        title: 'Languages',
                        type: 'item',
                        url: '/pages/admin/languages',
                        icon: 'language'
                    },
                    {
                        id: 'translations',
                        title: 'Translations',
                        type: 'item',
                        url: '/pages/admin/translations',
                        icon: 'translate'
                    }
                ]
            },
            {
                id: 'reports',
                title: 'Reports',
                type: 'collapsable',
                icon: 'bar_chart',
                children: [
                    {
                        id: 'itemsreport',
                        title: 'Items Report',
                        type: 'item',
                        url: '/pages/admin/itemsreport',
                        icon: 'show_chart'
                    },
                    {
                        id: 'lookupsreport',
                        title: 'Lookup reports',
                        type: 'item',
                        url: '/pages/admin/lookupsreport',
                        icon: 'insert_chart'
                    }
                ]
            }
        ]
    },
];
