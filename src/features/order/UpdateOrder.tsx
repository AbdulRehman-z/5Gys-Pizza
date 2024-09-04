import { ActionFunctionArgs, useFetcher } from "react-router-dom";
import { Button } from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";
import Loader from "../../ui/Loader";
import { useSelector } from "react-redux";
import { RootStateType } from "../../store";
import { useState } from "react";

const UpdateOrder = () => {
  const [withPriority, setWithPriority] = useState(false);
  const fetcher = useFetcher();
  const { address } = useSelector((state: RootStateType) => state.user);

  if (fetcher.state === "loading") return <Loader />;

  return (
    <div className="rounded-sm bg-stone-200 p-6">
      <fetcher.Form method="PATCH" className="text-right">
        <div className="flex items-center">
          <div className="grow space-y-5">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <label className="text-md font-semibold text-stone-700 sm:basis-40">
                Update Address
              </label>
              <input
                defaultValue={address}
                className="input grow placeholder:pl-1"
                type="text"
                name="address"
                placeholder="update address here..."
                // value={address}
              />
            </div>

            <div className="ml-7 flex items-center gap-5">
              <input
                className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
                type="checkbox"
                name="priority"
                id="priority"
                value={withPriority.toString()}
                onChange={(e) => setWithPriority(e.target.checked)}
              />
              <label htmlFor="priority" className="font-medium">
                Want to yo give your order priority?
              </label>
            </div>
            <div>
              <Button variant="small">
                {fetcher.state === "submitting"
                  ? "updating..."
                  : "Update order details"}
              </Button>
            </div>
          </div>
        </div>
      </fetcher.Form>
    </div>
  );
};

export async function updateOrderAction({
  request,
  params,
}: ActionFunctionArgs) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const updatedOrder = {
    ...data,
    priority: data.priority === "true",
    address: data.address,
  };

  await updateOrder(params.id, updatedOrder);
  return null;
}

export default UpdateOrder;
