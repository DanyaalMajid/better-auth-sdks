# PhoneNumberResetPasswordPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** | Indicates if the password was reset successfully | 

## Example

```python
from better_auth.models.phone_number_reset_password_post200_response import PhoneNumberResetPasswordPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of PhoneNumberResetPasswordPost200Response from a JSON string
phone_number_reset_password_post200_response_instance = PhoneNumberResetPasswordPost200Response.from_json(json)
# print the JSON string representation of the object
print(PhoneNumberResetPasswordPost200Response.to_json())

# convert the object into a dict
phone_number_reset_password_post200_response_dict = phone_number_reset_password_post200_response_instance.to_dict()
# create an instance of PhoneNumberResetPasswordPost200Response from a dict
phone_number_reset_password_post200_response_from_dict = PhoneNumberResetPasswordPost200Response.from_dict(phone_number_reset_password_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


