var root = {
    val: 1,
    left: {
        val:2,
        left: {
            val: 4,
        },
        right: {
            val:5,
        }
    },

    right: {
        val: 3,
        left:{
            val:6,
        },
        right:{
            val: 7
        }
    }
    
}

function DLR(root){
    var arr=[]; res=[];
    if(root){
        arr.push(root);
    }
    while(arr.length){
        var temp=arr.pop();
        res.push(temp.val);
        //这里先放右边再放左边因为取出来的顺序是反的
        if(temp.right){
            arr.push(temp.right);
        }
        if(temp.left){
            arr.push(temp.left);
        }
    }
    return res;
}
//先把左边的，全部放进arr再输出，处理右边的。 先把树的左节点推入栈，然后取出，再推右节点、
function LDR(root){
    var arr=[]; res=[];
    while(arr.length || root){
        if(root){
            arr.push(root);
            root = root.left;
        } else {
            var temp=arr.pop();
            res.push(temp.val);
            root=temp.right;
        }
    }
    return res;
}

//先将根节点和左树入栈，然后取出左树，再推入右数，取出，最后取出节点
function LRD(root){
    var arr=[], res=[];
    arr.push(root);
    while(arr.length) {
        var temp=arr.pop();
        res.push(temp.val);
        if(temp.left){
            arr.push(temp.left);
        }
        if(temp.right){
            arr.push(temp.right);
        }
    }
    return res.reverse();
} 

function LRD2(root) {
    if(!root){
        throw new Error('Empty Tree');
    }

    var arr=[],res=[];
    arr.push(root);

    var temp = null;
    while(arr.length !==0){
        temp = arr[arr.length -1];
        if(temp.left && root !== temp.left && root !== temp.right){
            arr.push(temp.left);
        } else if(temp.right && root !== temp.right){
            arr.push(temp.right);
        }else{
            res.push(arr.pop().val);
            root =temp;
        }
    }
    return res;
}

function preOrder(root){
    if(root){
        console.log(root.val);
        preOrder(root.left);
        preOrder(root.right);
    }
    
}

function midOrder(root){
    if(root){
        midOrder(root.left);
        console.log(root.val);
        midOrder(root.right);
    }
    
}



//preOrder(root);
midOrder(root);
console.log(DLR(root)); //1, 2, 4, 5, 3, 6, 7
console.log(LDR(root)); //4, 2, 5, 1, 6, 3, 7
console.log(LRD(root));//4, 5, 2, 6, 7, 3, 1
console.log(LRD2(root));//4, 5, 2, 6, 7, 3, 1