class Transform {
    transformCollection = (items) => items.map(this.transform.bind(this));
}

module.exports = Transform;