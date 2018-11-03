import DbException from "@lib/exceptions/db-exception";

class BaseRepository {
  constructor() {
    this.data = [];
  }

  get(id) {
    // if id is defined, find by id
    if (id) {
      let filtered = this.data.filter(t => t.id == id);
      if (filtered.length == 2)
        throw new DbException("Two records with the same key");
      if (filtered.length == 0)
        return null;
      return filtered[0];
    } else {
      // otherwise return all the records
      return this.data;
    }
  }

  query(filter) {
    return (filter) ? this.data.filter(filter) : this.data;
  }

  add(entity) {
    this.data.push(entity);
  }

  update(id, entity) {
    let index = this.data.findIndex(t => t.id == id);
    if (index != -1)
      this.data[index] = entity;
    return (index != -1);
  }

  remove(id) {
    let index = this.data.findIndex(t => t.id == id)
    if (index != -1)
      this.data.splice(index, 1);
    return index != -1;
  }

  findIndex(query) {
    return this.data.findIndex(query);
  }
}

export default BaseRepository;
