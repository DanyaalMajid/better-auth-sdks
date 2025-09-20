# PasskeyGenerateRegisterOptionsGet200ResponseAuthenticatorSelection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authenticator_attachment** | **str** |  | [optional] 
**require_resident_key** | **bool** |  | [optional] 
**user_verification** | **str** |  | [optional] 

## Example

```python
from better_auth.models.passkey_generate_register_options_get200_response_authenticator_selection import PasskeyGenerateRegisterOptionsGet200ResponseAuthenticatorSelection

# TODO update the JSON string below
json = "{}"
# create an instance of PasskeyGenerateRegisterOptionsGet200ResponseAuthenticatorSelection from a JSON string
passkey_generate_register_options_get200_response_authenticator_selection_instance = PasskeyGenerateRegisterOptionsGet200ResponseAuthenticatorSelection.from_json(json)
# print the JSON string representation of the object
print(PasskeyGenerateRegisterOptionsGet200ResponseAuthenticatorSelection.to_json())

# convert the object into a dict
passkey_generate_register_options_get200_response_authenticator_selection_dict = passkey_generate_register_options_get200_response_authenticator_selection_instance.to_dict()
# create an instance of PasskeyGenerateRegisterOptionsGet200ResponseAuthenticatorSelection from a dict
passkey_generate_register_options_get200_response_authenticator_selection_from_dict = PasskeyGenerateRegisterOptionsGet200ResponseAuthenticatorSelection.from_dict(passkey_generate_register_options_get200_response_authenticator_selection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


