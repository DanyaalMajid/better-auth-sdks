# JwksGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**keys** | [**List[JwksGet200ResponseKeysInner]**](JwksGet200ResponseKeysInner.md) | Array of public JSON Web Keys | 

## Example

```python
from better_auth.models.jwks_get200_response import JwksGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of JwksGet200Response from a JSON string
jwks_get200_response_instance = JwksGet200Response.from_json(json)
# print the JSON string representation of the object
print(JwksGet200Response.to_json())

# convert the object into a dict
jwks_get200_response_dict = jwks_get200_response_instance.to_dict()
# create an instance of JwksGet200Response from a dict
jwks_get200_response_from_dict = JwksGet200Response.from_dict(jwks_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


