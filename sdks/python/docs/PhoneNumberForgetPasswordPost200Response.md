# PhoneNumberForgetPasswordPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** | Indicates if the OTP was sent successfully | 

## Example

```python
from better_auth.models.phone_number_forget_password_post200_response import PhoneNumberForgetPasswordPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of PhoneNumberForgetPasswordPost200Response from a JSON string
phone_number_forget_password_post200_response_instance = PhoneNumberForgetPasswordPost200Response.from_json(json)
# print the JSON string representation of the object
print(PhoneNumberForgetPasswordPost200Response.to_json())

# convert the object into a dict
phone_number_forget_password_post200_response_dict = phone_number_forget_password_post200_response_instance.to_dict()
# create an instance of PhoneNumberForgetPasswordPost200Response from a dict
phone_number_forget_password_post200_response_from_dict = PhoneNumberForgetPasswordPost200Response.from_dict(phone_number_forget_password_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


