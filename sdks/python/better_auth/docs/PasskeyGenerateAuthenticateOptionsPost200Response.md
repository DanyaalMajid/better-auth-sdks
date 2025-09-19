# PasskeyGenerateAuthenticateOptionsPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**challenge** | **str** |  | [optional] 
**rp** | [**PasskeyGenerateRegisterOptionsGet200ResponseRp**](PasskeyGenerateRegisterOptionsGet200ResponseRp.md) |  | [optional] 
**user** | [**PasskeyGenerateRegisterOptionsGet200ResponseUser**](PasskeyGenerateRegisterOptionsGet200ResponseUser.md) |  | [optional] 
**timeout** | **float** |  | [optional] 
**allow_credentials** | [**List[PasskeyGenerateRegisterOptionsGet200ResponseExcludeCredentialsInner]**](PasskeyGenerateRegisterOptionsGet200ResponseExcludeCredentialsInner.md) |  | [optional] 
**user_verification** | **str** |  | [optional] 
**authenticator_selection** | [**PasskeyGenerateRegisterOptionsGet200ResponseAuthenticatorSelection**](PasskeyGenerateRegisterOptionsGet200ResponseAuthenticatorSelection.md) |  | [optional] 
**extensions** | **object** |  | [optional] 

## Example

```python
from better_auth.models.passkey_generate_authenticate_options_post200_response import PasskeyGenerateAuthenticateOptionsPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of PasskeyGenerateAuthenticateOptionsPost200Response from a JSON string
passkey_generate_authenticate_options_post200_response_instance = PasskeyGenerateAuthenticateOptionsPost200Response.from_json(json)
# print the JSON string representation of the object
print(PasskeyGenerateAuthenticateOptionsPost200Response.to_json())

# convert the object into a dict
passkey_generate_authenticate_options_post200_response_dict = passkey_generate_authenticate_options_post200_response_instance.to_dict()
# create an instance of PasskeyGenerateAuthenticateOptionsPost200Response from a dict
passkey_generate_authenticate_options_post200_response_from_dict = PasskeyGenerateAuthenticateOptionsPost200Response.from_dict(passkey_generate_authenticate_options_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


