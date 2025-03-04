import { Control, Controller } from "react-hook-form";

type Props = {
  control: Control<any>;
};

const LocationInfo = ({ control }: Props) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <Controller
          name="nationality"
          control={control}
          render={({ field }) => (
            <div>
              <label className="block text-gray-600">Nationality</label>
              <select {...field} className="w-full border p-2 rounded">
                <option>Nigeria</option>
                <option>Ghana</option>
                <option>Kenya</option>
              </select>
            </div>
          )}
        />

        <Controller
          name="state"
          control={control}
          render={({ field }) => (
            <div>
              <label className="block text-gray-600">State</label>
              <select {...field} className="w-full border p-2 rounded">
                <option>Abuja</option>
                <option>Lagos</option>
                <option>Kano</option>
              </select>
            </div>
          )}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Controller
          name="city"
          control={control}
          render={({ field }) => (
            <div>
              <label className="block text-gray-600">City</label>
              <input {...field} className="w-full border p-2 rounded" />
            </div>
          )}
        />

        <Controller
          name="zip"
          control={control}
          render={({ field }) => (
            <div>
              <label className="block text-gray-600">ZIP Code</label>
              <input {...field} className="w-full border p-2 rounded" />
            </div>
          )}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Controller
          name="houseNumber"
          control={control}
          render={({ field }) => (
            <div>
              <label className="block text-gray-600">House Number</label>
              <input {...field} className="w-full border p-2 rounded" />
            </div>
          )}
        />

        <Controller
          name="houseAddress"
          control={control}
          render={({ field }) => (
            <div>
              <label className="block text-gray-600">House Address</label>
              <input {...field} className="w-full border p-2 rounded" />
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default LocationInfo;
