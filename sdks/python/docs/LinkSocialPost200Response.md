# LinkSocialPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** | The authorization URL to redirect the user to | [optional] 
**redirect** | **bool** | Indicates if the user should be redirected to the authorization URL | 
**status** | **bool** |  | [optional] 

## Example

```python
from better_auth.models.link_social_post200_response import LinkSocialPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of LinkSocialPost200Response from a JSON string
link_social_post200_response_instance = LinkSocialPost200Response.from_json(json)
# print the JSON string representation of the object
print(LinkSocialPost200Response.to_json())

# convert the object into a dict
link_social_post200_response_dict = link_social_post200_response_instance.to_dict()
# create an instance of LinkSocialPost200Response from a dict
link_social_post200_response_from_dict = LinkSocialPost200Response.from_dict(link_social_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


