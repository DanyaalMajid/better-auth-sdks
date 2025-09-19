# PasskeyVerifyRegistrationPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**response** | **str** |  | 
**name** | **str** | Name of the passkey | [optional] 

## Example

```python
from better_auth.models.passkey_verify_registration_post_request import PasskeyVerifyRegistrationPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PasskeyVerifyRegistrationPostRequest from a JSON string
passkey_verify_registration_post_request_instance = PasskeyVerifyRegistrationPostRequest.from_json(json)
# print the JSON string representation of the object
print(PasskeyVerifyRegistrationPostRequest.to_json())

# convert the object into a dict
passkey_verify_registration_post_request_dict = passkey_verify_registration_post_request_instance.to_dict()
# create an instance of PasskeyVerifyRegistrationPostRequest from a dict
passkey_verify_registration_post_request_from_dict = PasskeyVerifyRegistrationPostRequest.from_dict(passkey_verify_registration_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


