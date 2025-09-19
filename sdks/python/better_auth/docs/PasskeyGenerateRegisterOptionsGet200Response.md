# PasskeyGenerateRegisterOptionsGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**challenge** | **str** |  | [optional] 
**rp** | [**PasskeyGenerateRegisterOptionsGet200ResponseRp**](PasskeyGenerateRegisterOptionsGet200ResponseRp.md) |  | [optional] 
**user** | [**PasskeyGenerateRegisterOptionsGet200ResponseUser**](PasskeyGenerateRegisterOptionsGet200ResponseUser.md) |  | [optional] 
**pub_key_cred_params** | [**List[PasskeyGenerateRegisterOptionsGet200ResponsePubKeyCredParamsInner]**](PasskeyGenerateRegisterOptionsGet200ResponsePubKeyCredParamsInner.md) |  | [optional] 
**timeout** | **float** |  | [optional] 
**exclude_credentials** | [**List[PasskeyGenerateRegisterOptionsGet200ResponseExcludeCredentialsInner]**](PasskeyGenerateRegisterOptionsGet200ResponseExcludeCredentialsInner.md) |  | [optional] 
**authenticator_selection** | [**PasskeyGenerateRegisterOptionsGet200ResponseAuthenticatorSelection**](PasskeyGenerateRegisterOptionsGet200ResponseAuthenticatorSelection.md) |  | [optional] 
**attestation** | **str** |  | [optional] 
**extensions** | **object** |  | [optional] 

## Example

```python
from better_auth.models.passkey_generate_register_options_get200_response import PasskeyGenerateRegisterOptionsGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of PasskeyGenerateRegisterOptionsGet200Response from a JSON string
passkey_generate_register_options_get200_response_instance = PasskeyGenerateRegisterOptionsGet200Response.from_json(json)
# print the JSON string representation of the object
print(PasskeyGenerateRegisterOptionsGet200Response.to_json())

# convert the object into a dict
passkey_generate_register_options_get200_response_dict = passkey_generate_register_options_get200_response_instance.to_dict()
# create an instance of PasskeyGenerateRegisterOptionsGet200Response from a dict
passkey_generate_register_options_get200_response_from_dict = PasskeyGenerateRegisterOptionsGet200Response.from_dict(passkey_generate_register_options_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


