# PasskeyVerifyAuthenticationPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**response** | **str** |  | 

## Example

```python
from better_auth.models.passkey_verify_authentication_post_request import PasskeyVerifyAuthenticationPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PasskeyVerifyAuthenticationPostRequest from a JSON string
passkey_verify_authentication_post_request_instance = PasskeyVerifyAuthenticationPostRequest.from_json(json)
# print the JSON string representation of the object
print(PasskeyVerifyAuthenticationPostRequest.to_json())

# convert the object into a dict
passkey_verify_authentication_post_request_dict = passkey_verify_authentication_post_request_instance.to_dict()
# create an instance of PasskeyVerifyAuthenticationPostRequest from a dict
passkey_verify_authentication_post_request_from_dict = PasskeyVerifyAuthenticationPostRequest.from_dict(passkey_verify_authentication_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


