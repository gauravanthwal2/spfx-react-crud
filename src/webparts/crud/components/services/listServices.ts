import * as pnp from "sp-pnp-js";

// Get all list items
export async function getAllListItems(): Promise<any> {
  try {
    const res = await pnp.sp.web.lists.getByTitle("Demo").items.get();
    return res;
  } catch (err) {
    console.error(err);
  }
}

// Add a list item
export async function addListItem(
  name: string,
  age: string,
  address: string
): Promise<any> {
  try {
    await pnp.sp.web.lists.getByTitle("Demo").items.add({
      Title: name,
      Age: age,
      Address: address,
    });
  } catch (err) {
    console.log(err);
  }
}

// Update list item
export async function updateListItem(
  id: number,
  name: string,
  age: string,
  address: string
): Promise<any> {
  try {
    console.log("update calling");

    await pnp.sp.web.lists.getByTitle("Demo").items.getById(id).update({
      Title: name,
      Age: age,
      Address: address,
    });
  } catch (err) {
    console.log(err);
  }
}

// Delete a list Item
export async function deleteListItem(ID: string): Promise<any> {
  try {
    const text = "Are You Sure! \nYou Want to Delete this User!";
    if (confirm(text) == true) {
      await pnp.sp.web.lists
        .getByTitle("Demo")
        .items.getById(parseInt(ID))
        .delete();
    } else {
      console.log("user not deleted");
    }
  } catch (err) {
    console.error(err);
  }
}
