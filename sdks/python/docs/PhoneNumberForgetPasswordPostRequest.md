# PhoneNumberForgetPasswordPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone_number** | **str** | The phone number which is associated with the user. Eg: \&quot;+1234567890\&quot; | 

## Example

```python
from better_auth.models.phone_number_forget_password_post_request import PhoneNumberForgetPasswordPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PhoneNumberForgetPasswordPostRequest from a JSON string
phone_number_forget_password_post_request_instance = PhoneNumberForgetPasswordPostRequest.from_json(json)
# print the JSON string representation of the object
print(PhoneNumberForgetPasswordPostRequest.to_json())

# convert the object into a dict
phone_number_forget_password_post_request_dict = phone_number_forget_password_post_request_instance.to_dict()
# create an instance of PhoneNumberForgetPasswordPostRequest from a dict
phone_number_forget_password_post_request_from_dict = PhoneNumberForgetPasswordPostRequest.from_dict(phone_number_forget_password_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


