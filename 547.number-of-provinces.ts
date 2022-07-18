/*
 * @lc app=leetcode id=547 lang=typescript
 *
 * [547] Number of Provinces
 */

// @lc code=start

/**
 * Implementation with quickfind, to store all actual roots
 */

class UnionFind {
    root: number[];

    constructor(size: number) {
        this.root = new Array(size);
        for (let i = 0; i < size; i++) {
            this.root[i] = i;
        }
    }

    union(item1: number, item2: number) {
        let root1 = this.find(item1);
        let root2 = this.find(item2);
        if (root1 !== root2) {
            for (let i = 0; i < this.root.length; i++) {
                if (this.root[i] === root2) {
                    this.root[i] = root1;
                }                
            }
        }
    }

    find(itemIndex: number): number {
        let itemRoot = itemIndex;
        while (itemRoot !== this.root[itemRoot]) {
            itemRoot = this.root[itemRoot];
        }
        return itemRoot;
    }
}

function findCircleNum(isConnected: number[][]): number {
    let uf = new UnionFind(isConnected.length);
    for (let i = 0; i < isConnected.length; i++) {
        for (let j = 0; j < isConnected[i].length; j++) {
            const connection = isConnected[i][j];
            if (connection === 1) {
                uf.union(i, j);
            }
        }        
    }
    // console.log(uf.root);

    let provices = new Set();
    for (let k = 0; k < uf.root.length; k++) {
        const itemRoot = uf.root[k];
        provices.add(itemRoot);
    }

    return provices.size;
};
// @lc code=end

