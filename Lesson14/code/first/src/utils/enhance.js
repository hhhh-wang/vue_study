
export const rewriteVueRouterMethods = (VueRouter) => {
    // 保存原始的push方法
    const originalPush = VueRouter.prototype.push
    // 重写push方法
    VueRouter.prototype.push = function(location, onComplete, onAbort) {
        if (onComplete || onAbort) {
            return originalPush.call(this, location, onComplete, onAbort)
        }
        return originalPush.call(this, location).catch(err => {
           // if(err.name !== 'NavigationDuplicated')
        })
    }

    // 保存原始的replace方法
    const originalReplace = VueRouter.prototype.replace
    // 重写replace方法
    VueRouter.prototype.replace = function(location, onComplete, onAbort) {
        if (onComplete || onAbort) {
            return originalReplace.call(this, location, onComplete, onAbort)
        }
        return originalReplace.call(this, location).catch(err => {
           // if(err.name !== 'NavigationDuplicated') throw err
        })
    }
}