# PhoneNumberRequestPasswordResetPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone_number** | **str** |  | 

## Example

```python
from better_auth.models.phone_number_request_password_reset_post_request import PhoneNumberRequestPasswordResetPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PhoneNumberRequestPasswordResetPostRequest from a JSON string
phone_number_request_password_reset_post_request_instance = PhoneNumberRequestPasswordResetPostRequest.from_json(json)
# print the JSON string representation of the object
print(PhoneNumberRequestPasswordResetPostRequest.to_json())

# convert the object into a dict
phone_number_request_password_reset_post_request_dict = phone_number_request_password_reset_post_request_instance.to_dict()
# create an instance of PhoneNumberRequestPasswordResetPostRequest from a dict
phone_number_request_password_reset_post_request_from_dict = PhoneNumberRequestPasswordResetPostRequest.from_dict(phone_number_request_password_reset_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


