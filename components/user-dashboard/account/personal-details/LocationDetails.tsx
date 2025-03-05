import { useEffect, useState } from "react";
import { Country, State, City } from "country-state-city";
import Dropdown from "./Dropdown";
import EditableInput from "./EditableInput";

interface LocationFormData {
  nationality: string;
  state: string;
  city: string;
  zipcode: string;
  houseNo: string;
  houseAddress: string;
}

interface LocationDetailsProps {
  formData: LocationFormData;
  handleChange: (field: keyof LocationFormData, value: string) => void;
  isEditing: boolean;
}

export default function LocationDetails({
  formData,
  handleChange,
  isEditing,
}: LocationDetailsProps) {
  const [countries, setCountries] = useState<string[]>([]);
  const [states, setStates] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  useEffect(() => {
    const countryList = Country.getAllCountries().map(
      (country) => country.name
    );
    setCountries(countryList);
  }, []);

  useEffect(() => {
    if (formData.nationality) {
      const selectedCountry = Country.getAllCountries().find(
        (c) => c.name === formData.nationality
      );
      if (selectedCountry) {
        const stateList = State.getStatesOfCountry(selectedCountry.isoCode).map(
          (state) => state.name
        );
        setStates(stateList);
        setCities([]);
      }
    }
  }, [formData.nationality]);

  useEffect(() => {
    if (formData.state) {
      const selectedCountry = Country.getAllCountries().find(
        (c) => c.name === formData.nationality
      );
      const selectedState = State.getStatesOfCountry(
        selectedCountry?.isoCode || ""
      ).find((s) => s.name === formData.state);

      if (selectedCountry && selectedState) {
        const cityList = City.getCitiesOfState(
          selectedCountry.isoCode,
          selectedState.isoCode
        ).map((city) => city.name);
        setCities(cityList);
      }
    }
  }, [formData.state]);

  return (
    <div>
      <h1 className="text-lg text-[#2C2C2C] font-medium mb-4">LOCATION</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Dropdown
          label="Nationality"
          options={countries}
          value={formData.nationality}
          onChange={(val) => handleChange("nationality", val)}
          isEditing={isEditing}
        />
        <Dropdown
          label="State"
          options={states}
          value={formData.state}
          onChange={(val) => handleChange("state", val)}
          isEditing={isEditing}
          disabled={!formData.nationality}
        />
        <Dropdown
          label="City"
          options={cities}
          value={formData.city}
          onChange={(val) => handleChange("city", val)}
          isEditing={isEditing}
          disabled={!formData.state}
        />
        <EditableInput
          label="ZIP Code"
          value={formData.zipcode}
          onChange={(val) => handleChange("zipcode", val)}
          isEditing={isEditing}
        />
        <EditableInput
          label="House number"
          value={formData.houseNo}
          onChange={(val) => handleChange("houseNo", val)}
          isEditing={isEditing}
        />
        <EditableInput
          label="House address"
          value={formData.houseAddress}
          onChange={(val) => handleChange("houseAddress", val)}
          isEditing={isEditing}
        />
      </div>
    </div>
  );
}
